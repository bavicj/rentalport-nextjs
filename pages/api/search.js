import { fireDb } from 'services/fireinit'
const path = "/results/GhyUU0yLrhfZtmWkoRbGmOjoGJE3/PWx54oDZ3xotzGjtLG3G"

export default (req, res) => {
  fireDb.collection(path).limit(10).onSnapshot(({ docs }) => {
    res.status(200).json(docs.map(car => car.data()))
  })
}
