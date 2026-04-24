import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function MedicineCard({ medicine }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>
          {medicine.name} {medicine.dosage}
        </Text>
        <Text style={styles.time}>{medicine.time}</Text>
      </View>

      {medicine.status === "due_now" && (
        <View style={styles.actions}>
          <TouchableOpacity style={styles.takeBtn}>
            <Text style={styles.takeText}>Take</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipBtn}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: { fontSize: 16, fontWeight: "600" },
  time: { fontSize: 13, color: "#86868B", marginTop: 2 },
  actions: { flexDirection: "row", gap: 8 },
  takeBtn: {
    backgroundColor: "#5B4FF5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  takeText: { color: "#fff", fontWeight: "600" },
  skipBtn: {
    borderWidth: 1,
    borderColor: "#E5E5EA",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  skipText: { color: "#86868B" },
});
