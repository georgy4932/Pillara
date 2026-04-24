import { View, Text, StyleSheet } from "react-native";

export default function AppointmentCard({ appointment }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{appointment.title}</Text>
      <Text style={styles.provider}>{appointment.provider}</Text>
      <Text style={styles.date}>
        {appointment.date} · {appointment.time}
      </Text>
      <Text style={styles.questions}>
        {appointment.questionsCount} questions prepared
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#5B4FF5",
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
  },
  title: { color: "#fff", fontSize: 16, fontWeight: "700" },
  provider: { color: "#fff", opacity: 0.9 },
  date: { color: "#fff", opacity: 0.8, marginTop: 4 },
  questions: { color: "#fff", marginTop: 8, fontSize: 12 },
});
