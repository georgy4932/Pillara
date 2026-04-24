import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function QuickActions() {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.btn}>
        <Text>Add Medicine</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>OTC Check</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>Add Appointment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between" },
  btn: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    width: "30%",
    alignItems: "center",
  },
});
