import { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function ContactPage() {
    const socialRefs = useRef<HTMLElement[]>([]);

    socialRefs.current = [];

    const addToRefs = (el: HTMLElement | null) => {
        if (el && !socialRefs.current.includes(el)) {
            socialRefs.current.push(el);
        }
    };

    useEffect(() => {
        gsap.fromTo(
            '.hero-section',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
        );

        gsap.fromTo(
            socialRefs.current,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                stagger: 0.2,
                ease: 'elastic.out(1, 0.3)',
                scrollTrigger: {
                    trigger: '.social-icons',
                    start: 'top 80%',
                }
            }
        );

        gsap.fromTo(
            '.contact-form',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1 }
        );
    }, []);

    return (
        <>
            <div className="flex flex-col justify-between min-h-screen overflow-x-hidden">
                <Navbar margin />
                <div className="hero-section flex flex-col items-center justify-center h-3/4 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg md:text-xl mb-8">Feel free to reach out through any of the channels below.</p>
                </div>
                <div className="social-icons flex flex-wrap justify-center gap-8 p-8 bg-gray-100">
                    <a
                        target='_blank'
                        href='https://github.com/MERAJ-droid/'
                        ref={addToRefs}
                        className="social-icon w-12 h-12 flex items-center justify-center bg-[#333] text-white rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2C6.486 2 2 6.486 2 12c0 4.418 2.864 8.166 6.84 9.49.5.092.68-.217.68-.484v-1.882c-2.787.608-3.374-1.36-3.374-1.36-.455-1.15-1.11-1.46-1.11-1.46-.908-.62.068-.607.068-.607 1.002.07 1.528 1.028 1.528 1.028.89 1.523 2.336 1.083 2.906.827.092-.646.35-1.082.636-1.333-2.2-.249-4.51-1.1-4.51-4.9 0-1.085.388-1.973 1.027-2.664-.103-.25-.447-1.265.098-2.634 0 0 .84-.27 2.75 1.03a9.637 9.637 0 012.495-.335c.847.004 1.699.12 2.496.335 1.91-1.3 2.75-1.03 2.75-1.03.546 1.369.202 2.384.099 2.634.637.691 1.025 1.579 1.025 2.664 0 3.81-2.31 4.65-4.525 4.9.36.31.682.928.682 1.868v2.785c0 .272.175.58.68.48 3.979-1.327 6.84-5.065 6.84-9.482C22 6.486 17.514 2 12 2z"/>
                        </svg>
                    </a>
                    
                    <a
                        target='_blank'
                        href='https://www.linkedin.com/in/meraj00/'
                        ref={addToRefs}
                        className="social-icon w-12 h-12 flex items-center justify-center bg-[#0077b5] text-white rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    {/* <a
                        target='_blank'
                        href='https://www.youtube.com/@blue-moon_strums'
                        ref={addToRefs}
                        className="social-icon w-12 h-12 flex items-center justify-center bg-[#FF0000] text-white rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/></svg>
                    </a> */}
                    {/* <a
                        target='_blank'
                        href='https://x.com/nytrixis'
                        ref={addToRefs}
                        className="social-icon w-12 h-12 flex items-center justify-center bg-[#0077b5] text-white rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
                    </a> */}
                    <a
                        target='_blank'
                        href='https://discord.com/users/professor__paradox'
                        ref={addToRefs}
                        className="social-icon w-12 h-12 flex items-center justify-center bg-[#FF0000] text-white rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110"
                    >
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.248 18.348l-.371-1.295.896.833.847.784 1.505 1.33v-12.558c0-.798-.644-1.442-1.435-1.442h-9.38c-.791 0-1.435.644-1.435 1.442v9.464c0 .798.644 1.442 1.435 1.442h7.938zm-1.26-3.206l-.462-.567c.917-.259 1.267-.833 1.267-.833-.287.189-.56.322-.805.413-.35.147-.686.245-1.015.301-.672.126-1.288.091-1.813-.007-.399-.077-.742-.189-1.029-.301-.161-.063-.336-.14-.511-.238l-.028-.016-.007-.003-.028-.016-.028-.021-.196-.119s.336.56 1.225.826l-.469.581c-1.547-.049-2.135-1.064-2.135-1.064 0-2.254 1.008-4.081 1.008-4.081 1.008-.756 1.967-.735 1.967-.735l.07.084c-1.26.364-1.841.917-1.841.917l.413-.203c.749-.329 1.344-.42 1.589-.441l.119-.014c.427-.056.91-.07 1.414-.014.665.077 1.379.273 2.107.672 0 0-.553-.525-1.743-.889l.098-.112s.959-.021 1.967.735c0 0 1.008 1.827 1.008 4.081 0 0-.573.977-2.142 1.064zm-.7-3.269c-.399 0-.714.35-.714.777 0 .427.322.777.714.777.399 0 .714-.35.714-.777 0-.427-.315-.777-.714-.777zm-2.555 0c-.399 0-.714.35-.714.777 0 .427.322.777.714.777.399 0 .714-.35.714-.777.007-.427-.315-.777-.714-.777z"/></svg>
                    </a>
                    <a
                        target='_blank'
                        href='mailto:mh4118359@gmail.com'
                        ref={addToRefs}
                        className="social-icon w-12 h-12 flex items-center justify-center bg-[#D14836] text-white rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110"
                    >
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.001 16.917c.552 0 .999-.448.999-.999v-7.919c0-.551-.448-.999-.999-.999h-12.002c-.551 0-.999.448-.999.999v7.919c0 .551.448.999.999.999h12.002zm-6.001-3.55l-5.45-3.782-.011 6.748h10.899v-6.748l-5.438 3.782zm5.174-5.784c-1.527 1.064-5.174 3.634-5.174 3.634l-5.203-3.634h10.377z"/></svg>
                    </a>
                </div>
                <div className="flex-grow p-8 bg-gray-100 flex items-center justify-center">
                    <div className="w-full max-w-lg">
                        <form className="contact-form bg-white p-8 rounded-lg shadow-lg">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500
                                    text-primary"
                                    id="name"
                                    type="text"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-primary"
                                    id="email"
                                    type="email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
                                <textarea
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-primary"
                                    id="message"
                                    rows={5}
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default ContactPage;
