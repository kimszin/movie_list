import { useRouter } from 'next/router'
import React from 'react'
import Seo from '../../components/Seo';

function Detail({ params }: any) {
  // const router = useRouter();
  // console.log(router.query.params)
  // const title: any = router.query.params?.[0];
  // const id: any = router.query.params?.[1];
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  )
}

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  }
}

export default Detail