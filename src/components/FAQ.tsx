import { faq } from '@/data'
import React from 'react'

const FAQ = () => {
  return (
    <section id='faq' className="w-full max-container mt-16 text-white">
	<div className="container flex flex-col justify-center px-2 md:px-12 py-8 mx-auto md:p-8">
    <h3 className="text-xl text-amber-400 text-center font-semibold mb-1">FAQ</h3>
    <h2 className='text-4xl text-white text-center font-bold'>Got questions?<br/>Join the community.</h2>
		<p className="text-slate-400 text-center mt-2 mb-12">Our Discord community and staff are here to help!<br/>Your feedback will help Dora AI improve in future versions.</p>
		<div className="space-y-4">
			{faq.map((ele, index) => {
				return <details key={index} className="w-full border hover:border-amber-400 group rounded-lg">
				<summary className="px-4 py-6 group-hover:text-amber-400">{ele.question}</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4">{ele.answer}</p>
			</details>
				})
			}
		</div>
	</div>
</section>
  )
}

export default FAQ