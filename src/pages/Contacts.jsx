import { Box, CssBaseline, CssVarsProvider, Typography } from '@mui/joy'
import { Header, Main, MainMobile, Sidebar } from 'components/pages/contacts'
import { Form } from 'components/pages/contacts/Form'
import { useState } from 'react'
import { useGetContactsQuery } from 'redux/services'

export default function Contacts() {
  const [filter, setFilter] = useState('')
  const { data } = useGetContactsQuery()

  const filteredContacts = () =>
    data
      ?.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(filter.toLowerCase()) || number.split('-').join('').includes(filter)
      )
      .reverse()

  return (
    <CssVarsProvider defaultMode='system'>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <Sidebar />
        <Box
          sx={{
            px: { xs: 2, md: 6 },
            pt: { xs: 8, md: 3 },
            flex: 1,
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column'
          }}>
          <Typography level='h2' sx={{ my: 1 }}>
            Contacts
          </Typography>
          <Form contacts={filteredContacts} />
          <Main contacts={filteredContacts} filter={filter} setFilter={setFilter} />
          <MainMobile contacts={filteredContacts} />
        </Box>
      </Box>
    </CssVarsProvider>
  )
}
