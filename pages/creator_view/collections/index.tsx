import styles from '@styles/view_collection.module.scss'

import { ICollection } from 'interfaces'
import Axios, { AxiosResponse } from 'axios'
import Link from 'next/link'
import { sample, sample2 } from '@components/Samples'

import CollectionsList from '@components/CreatorView/CollectionsView/CollectionsList'

const serverAddress = 'localhost'
const serverPort = 4000

export const getStaticProps = async () => {
  let response: AxiosResponse
  let collections: ICollection[]
  try {
    response = await Axios.get(`http://${serverAddress}:${serverPort}/get_all_collections`)
    console.log(response)
    collections = response.data as ICollection[]
  } catch (err) {
    console.log(err)
    collections = [sample, sample2]
  }

  return {
    props: {
      collections
    }
  }
}

const CollectionsView = ({ collections }: { collections: ICollection[] }) => {
  return (
    <CollectionsList collections={collections} />
  )
}

export default CollectionsView
