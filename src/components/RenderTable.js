import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

export default function RenderTable() {
	const [products,setProduct]=useState([]);
	const [inputValue, setInputValue] = useState('');
	useEffect(() => {
		const fetchSearchResults = async () => {
			const response = await fetch(`https://api.escuelajs.co/api/v1/products?title=${inputValue}`);
			const data = await response.json();
			setProduct(data);
		};
		fetchSearchResults();
	}, [inputValue]);
	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};
	const columns=[
		{
			name:"ProductName",
			selector:(row)=><p style={{fontSize:"12px",fontWeight:"500"}}>{row.title}</p>

		},
		{
			name:"Price",
			selector:(row)=><p style={{fontSize:"12px",fontWeight:"500"}}>{row.price+" $"}</p>
// <p style={{fontSize:"12px",fontWeight:"500"}}>{row.price+" $"}</p>
		},
		{
			name:"Category",
			selector:(row)=> <p style={{fontSize:"12px",fontWeight:"500"}}>{row.category.name}</p>
		},
		{
			name:"Photo",
			selector:(row)=> row.images[0]?<img width="100px" height="50px" src={row.images[0]}/>:<img width="100px" height="50px" src="https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg" />
		},
		{
			name:"Action",
			selector:(row)=>(
				<>
					<button type="button" class=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
					<button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
				</>
			)
		},
	]
	return (
		<div className='text-3xl font-bold'>
			<DataTable 
				title="All Products Listing"
				columns={columns} 
				data={products}
				subHeader
				subHeaderComponent={	
					<form className='w-2/6'>   
						<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
						<div class="relative">
							<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
							</div>
							<input 
								type="search" 
								class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
								placeholder="find product here"
								onChange={handleInputChange}
							/>
						</div>
					</form>
				}
				pagination
			/>
		</div>
	)
}
