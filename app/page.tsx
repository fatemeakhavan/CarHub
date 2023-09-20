import "./globals.css";
import {Hero,SearchBar, CustomFilter} from "../component";

export default function Home() {
  return (
      <main className="overflow-hidden">
        <Hero/>
          <div className='mt-12 padding-x padding-y max-width id="discover"'>
              <div className="home__text-container">
                  <h1 className="text-4xl font-extrabold">Car catalogue</h1>
                  <p>Explore the cars you might like</p>
              </div>
          </div>
          <div className="home__filters">
              <SearchBar/>
          </div>
          <div className="home__filter-container">
              <CustomFilter title="fuel"/>
              <CustomFilter title="year"/>
          </div>
      </main>
  )
}
