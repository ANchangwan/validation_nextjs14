"use server";
export default async function onValidation(formData: FormData) {
  await new Promise((response) => setTimeout(response, 4000));
  const data = {
    phone: formData.get("phone"),
    token: formData.get("token"),
  };
  console.log(data);
}
