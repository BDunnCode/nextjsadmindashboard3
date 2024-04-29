const Page = () => {

  const handleForm = async (formData) => {
    "use server"
    console.log(formData)
    const firstName = formData.get("firstName")
    console.log("Hello,", firstName[0].toUpperCase() + firstName.slice(1))
  }
  return ( 
    <div>
      <form action={handleForm}>
        <input type="text" name="firstName"/>
        <input type="text" name="lastName" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Page;