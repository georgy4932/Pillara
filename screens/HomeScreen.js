import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import MedicineCard from "../components/MedicineCard";
import AppointmentCard from "../components/AppointmentCard";
import QuickActions from "../components/QuickActions";

const mockMedicines = [
  { id: 1, name: "Metformin", dosage: "500mg", time: "8:00 AM", status: "due_now" },
  { id: 2, name: "Lisinopril", dosage: "10mg", time: "8:00 AM", status: "taken" },
  { id: 3, name: "Atorvastatin", dosage: "20mg", time: "9:00 PM", status: "upcoming" },
];

const mockAppointment = {
  title: "GP Review",
  provider: "Dr. Ahmed",
  date: "Mon, 28 Apr",
  time: "10:30 AM",
  questionsCount: 3,
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning, Sarah 👋</Text>
          <Text style={styles.date}>Friday, 25 April</Text>
        </View>

        {/* Medicines */}
        <Text style={styles.section}>TODAY’S MEDICINES</Text>
        {mockMedicines.map((m) => (
          <MedicineCard key={m.id} medicine={m} />
        ))}

        {/* Appointment */}
        <Text style={styles.section}>NEXT APPOINTMENT</Text>
        <AppointmentCard appointment={mockAppointment} />

        {/* Quick actions */}
        <Text style={styles.section}>QUICK ACTIONS</Text>
        <QuickActions />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F7" },
  content: { padding: 20 },
  header: { marginBottom: 20 },
  greeting: { fontSize: 22, fontWeight: "700", color: "#1D1D1F" },
  date: { fontSize: 14, color: "#86868B", marginTop: 4 },
  section: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 12,
    fontWeight: "700",
    color: "#86868B",
    letterSpacing: 1,
  },
});
