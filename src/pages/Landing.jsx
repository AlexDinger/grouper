import React from 'react'
import Page from '../components/Page'
import background from '../assets/wave.svg'
import example from '../assets/example.png'

const Landing = () => {
  return (
    <Page className="text-center pt-16">
      <section
        className="bg-no-repeat bg-right bg-cover space-y-10"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="text-5xl font-extralight tracking-wider">
          There's a better
          <br />
          way to ask
        </h1>
        <p className="text-2xl font-extralight px-2">
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead - and make everyone happy.
        </p>
        <button className="px-5 py-4 bg-gray-700 hover:bg-gray-600 transition-all ease-in-out duration-500 text-white font-normal rounded shadow-xl text-2xl">
          Get started - it's free
        </button>
      </section>
      <section className="bg-gray-100 text-center py-16 space-y-5">
        <img
          src={example}
          width="350px"
          height="auto"
          className="block mx-auto"
        />
        <h2 className="uppercase font-bold text-xl">Organize your members</h2>
        <p className="text-xl">
          Keep important info handy-your notes sync automatically to all your
          devices.
        </p>
      </section>
      <section className="text-center">
        <h1 className="text-4xl py-16 px-4 font-light">
          Take the headache out of vacation planning
        </h1>
      </section>
      <footer className="bg-gray-900 text-white py-10 px-5 text-left space-y-10">
        <h1 className="text-4xl text-center font-thin">Grouper</h1>
        <section className="space-y-4">
          <h4 className="text-xl font-bold uppercase">Sitemap</h4>
          <ul className="space-y-3 text-lg">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Trips</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
        </section>
        <section className="space-y-4">
          <h4 className="text-xl font-bold uppercase">Support</h4>
          <ul className="space-y-3 text-lg">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </section>
        <span className="block text-center text-sm">
          &copy; 2021 Grouper. All rights reserved.
        </span>
      </footer>
    </Page>
  )
}

export default Landing
