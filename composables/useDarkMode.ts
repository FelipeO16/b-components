export default async function () {
  let color = useLocalStorage("darkMode", false);
  console.log(color);
  return { color };
}
