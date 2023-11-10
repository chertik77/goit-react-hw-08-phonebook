import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContactById, fetchContacts } from '~/redux/operations'
import { filteredContacts } from '~/redux/selectors'

export const Contacts = () => {
  const filterContacts = useSelector(filteredContacts)
  const dispatch = useDispatch()

  const handleDelete = id => dispatch(deleteContactById(id))

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
      <h2 className='text-center font-serif text-4xl mb-5'>Contacts:</h2>
      <ul className='gap-3 flex w-96 items-center justify-end flex-col'>
        {filterContacts.map(({ id, name, phone }) => (
          <li key={id} className='flex items-center justify-end gap-2'>
            <p>{name}</p>
            <p>{phone}</p>
            <button
              type='button'
              className='rounded-md bg-red-600 px-5 py-2 font-serif'
              onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
