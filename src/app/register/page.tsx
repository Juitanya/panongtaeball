import RegisterForm from './_components/RegisterForm'

export default async function RegisterPage() {
  return (
    <div className='flex flex-col items-center justify-center mt-16 h-[calc(100vh-64px)] p-6'>
      <RegisterForm />
    </div>
  )
}
