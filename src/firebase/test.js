import {
  collection,
  query,
  where,
  getDocs,
  docs,
  addDoc
} from 'firebase/firestore'
import { db } from '../firebase/firebase'

export async function getTrips(id) {
  const q = query(collection(db, 'trips'), where('uid', '==', id))
  const snap = await getDocs(q)
  const result = []
  snap.forEach(doc => {
    result.push(doc.data())
  })

  return result
}

export async function addTrip(tripData, id) {
  const docRef = await addDoc(collection(db, 'trips'), {
    name: tripData.name,
    members: tripData.members,
    description: tripData.description,
    uid: id
  })
  return docRef
}
