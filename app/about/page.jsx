import React from 'react'

function page() {
  return (
    <div>My page</div>
  )
}

export default page


export function generateMetadata() {
    return{
      title: "Product Page",
      description: "You can view products on this page"
    }
  }