import React from 'react'
import {blogs} from '../../../lib/blogs'
import {getSession} from 'next-auth/react'

export default function BlogsPage({blogs}: any) {
  return (
    <div>
      <h2>Blogs Page</h2>
      {blogs.length > 0 ? (
        <ul>
          {blogs.map((blog: any) => {
            return (
              <div key={blog.id}>
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
              </div>
            )
          })}
        </ul>
      ) : (
        <h2> You need to sign in </h2>
      )}
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  console.log('session ', session)

  //   if (!session) {
  //     return {
  //       redirect: {
  //         destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blogs',
  //         permanent: false,
  //       },
  //     }
  //   }

  return {
    props: {
      blogs: session ? blogs : [],
    },
  }
}
