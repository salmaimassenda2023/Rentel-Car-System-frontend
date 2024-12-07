import Image from "next/image";
import {CustomButton, CustomersSay, CustomFilter, Hero, SearchBar} from "@/components";

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <main className="overflow-hidden">
          <Hero/>
          {/*Car Catalog Session*/}
          <div className='mt-12 padding-x padding-y max-width' id='discover'>
              <div className='home__text-container'>
                  <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
                  <p>Explore out cars you might like</p>
              </div>
              <div className='home__filters'>
                  <SearchBar />

                  <div className='home__filter-container'>
                      <CustomFilter title='fuel'  />
                      <CustomFilter title='year' />
                  </div>
              </div>

          </div>

      </main>

    </div>
  );
}
