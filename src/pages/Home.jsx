import { useEffect, useState } from 'react'
import { useAuthState } from '../firebase/firebase'
import Page from '../components/Page'
import AddTripButton from '../components/AddTripButton'
import TripCard from '../components/TripCard'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { getTrips } from '../firebase/test'
import AddTripForm from '../components/AddTripForm'

const Home = () => {
  const { user } = useAuthState()
  const [trips, setTrips] = useState()
  const [addTripActive, setActive] = useState(false)

  useEffect(() => {
    getTrips(user.uid).then(res => setTrips(res))
  }, [])

  return (
    <Page className="px-4 pt-7 overflow-x-hidden">
      {trips ? (
        trips.map((trip, index) => {
          return <TripCard {...trip} key={index} />
        })
      ) : (
        <div className="bg-red-200 w-full h-52" />
      )}
      {/* <AddTripButton /> */}
      <AddTripForm show={addTripActive} isOpen={setActive} uid={user.uid} />
    </Page>
  )
}

export default Home
