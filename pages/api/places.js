// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPlaces } from 'services/api'

export default (req, res) => {
  getPlaces().then(({ data }) => res.status(200).json(data))
}
