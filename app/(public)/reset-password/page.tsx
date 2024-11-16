import ResetPasswordPage from '@/components/auth/ResetPasswordForm'
import Logo from '@/components/ui/logo'

export default function LoginPage() {




  return (

    <>
    <section className='flex flex-row '>
      <div className='absolute left-8 top-8'>
        <Logo/>   
      </div>
    </section>
    <section className='flex flex-row justify-center items-center min-h-screen'>
      <section className='w-full flex flex-col items-center '>
       <div className="container h-full mx-auto max-w-lg p-10 flex flex-col items-center justify-center align-center">
          <div className='p-8 flex flex-col items-center justify-center gap-4 border border-gray-300 rounded-xl'>
            <div className='flex flex-col gap-3'>
              <h1 className="text-2xl text-center font-bold">Set your Password</h1>
              <p className='text-sm text-gray-600'></p>
            </div>
            <ResetPasswordPage />
          </div>
        </div>
      </section>
    </section>
    </>
  )
}