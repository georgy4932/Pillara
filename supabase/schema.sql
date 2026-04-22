create extension if not exists "pgcrypto";

create table if not exists public.waitlist_signups (
  id            uuid primary key default gen_random_uuid(),
  first_name    text not null,
  last_name     text not null,
  email         text not null,
  role          text not null,
  platform      text,
  message       text,
  consent       boolean not null default false,
  source        text not null default 'landing_page',
  ip_hash       text,
  confirmed_at  timestamptz,
  created_at    timestamptz not null default now(),

  constraint waitlist_email_not_blank check (length(trim(email)) > 3),
  constraint waitlist_first_name_not_blank check (length(trim(first_name)) > 0),
  constraint waitlist_last_name_not_blank check (length(trim(last_name)) > 0),
  constraint waitlist_role_not_blank check (length(trim(role)) > 0)
);

create unique index if not exists waitlist_email_unique_ci
  on public.waitlist_signups (lower(email));

create index if not exists waitlist_email_idx
  on public.waitlist_signups (email);

create index if not exists waitlist_role_idx
  on public.waitlist_signups (role);

create index if not exists waitlist_platform_idx
  on public.waitlist_signups (platform);

create index if not exists waitlist_created_idx
  on public.waitlist_signups (created_at desc);

alter table public.waitlist_signups enable row level security;

drop policy if exists "Allow public insert" on public.waitlist_signups;
create policy "Allow public insert"
  on public.waitlist_signups
  for insert
  to anon
  with check (
    consent = true
    and source in ('landing_page')
  );

drop policy if exists "No public reads" on public.waitlist_signups;
create policy "No public reads"
  on public.waitlist_signups
  for select
  to anon
  using (false);

create or replace view public.waitlist_stats
with (security_invoker = true) as
select
  count(*)                                                      as total_signups,
  count(*) filter (where role = 'Patient')                      as patients,
  count(*) filter (where role = 'Carer')                        as carers,
  count(*) filter (where role = 'Pharmacist')                   as pharmacists,
  count(*) filter (where role = 'GP practice / clinic')         as gp_practices,
  count(*) filter (where role = 'Healthcare partner')           as health_partners,
  count(*) filter (where role = 'Other')                        as other,
  count(*) filter (where platform = 'iOS')                      as ios_users,
  count(*) filter (where platform = 'Android')                  as android_users,
  count(*) filter (where platform = 'Web')                      as web_users,
  count(*) filter (where platform = 'All platforms')            as all_platforms,
  count(*) filter (where created_at >= now() - interval '7 days')  as last_7_days,
  count(*) filter (where created_at >= now() - interval '30 days') as last_30_days
from public.waitlist_signups;
