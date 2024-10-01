import Navbar from '../components/Navbar'
import Button from '../components/common/Button'
import { TransitionLink } from '../contexts/PageLoaderContext'
import catImage from '../assets/wat.png'

function Page404() {
  return (
    <>
        <Navbar />
        <section className="container h-screen mx-auto flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="text-9xl font-bold mb-4">404</h1>
                <img src={catImage} alt="Confused cat" className="w-64 h-64 mx-auto mb-8" />
                <p className="text-2xl mb-8">Oops! This page seems to have wandered off...</p>
                <TransitionLink to="/">
                    <Button className='w-48' color={'primary'}>Take Me Home</Button>
                </TransitionLink>
            </div>
        </section>
    </>
  )
}

export default Page404
