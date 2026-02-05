import CounterComponent from "./components/counter";

export default function Home() {
  return (
    <>
      {/* Counter Component ini merupakan component dengan jenis client side,
      dan dia bisa di panggil di halaman yang menggunakan server side seperti page home ini,
      dan ini merupakan best practices untuk alih-alih menjadikan semua page menjadi client side,
      kita bisa meng-ekstrak beberapa bagian tertentu menjadi client side dan di panggil kembali ke halaman server side */}
      <CounterComponent />
    </>
  );
}
