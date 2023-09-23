import "./globals.css";
import {Hero,SearchBar, CustomFilter} from "../component";
import {fetchCars} from '../utils'

export default async function Home({searchParams}) {
    const allCars=await fetchCars({
        manufacturer: searchParams.manufacturer || '' ,
        year: searchParams.year || 2022,
        fuel:searchParams.limit || 10,
        model:searchParams.model || ','
    });
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
      <main className="overflow-hidden">
          <div>
              <Hero/>
              <div className='mt-12 padding-x padding-y max-width id="discover"'>
                  <div className="home__text-container">
                      <h1 className="text-4xl font-extrabold">Car catalogue</h1>
                      <p>Explore the cars you might like</p>
                  </div>
              </div>
              <div className="home__filters">
                  <SearchBar/>
                  <div className="home__filter-container">
                      <CustomFilter title="fuel"/>
                      <CustomFilter title="year"/>
                  </div>
              </div>
              {!isDataEmpty ? (
                  <section>
                      <div className="home__cars-wrapper">
                          {allCars?.map((car)=>(
                              <carCard car={car}/>
                          ))}
                      </div>
                  </section>
              ):
                  <div className="home__error-container">
                      <h2 className="text-black text-x1 font-bold">Oops,no result</h2>
                      <p>{allCars?.message}</p>
                  </div>
              }
          </div>
      </main>
  )
}
