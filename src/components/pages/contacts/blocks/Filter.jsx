import { Search } from '@mui/icons-material'
import { Box, FormControl, FormLabel, Input } from '@mui/joy'

export const Filter = ({ onChange, filter }) => (
  <Box sx={{ borderRadius: 'sm', py: 2, width: { sm: 284, lg: 800 }, mt: 2 }}>
    <FormControl size='sm'>
      <FormLabel>Search for contact</FormLabel>
      <Input
        placeholder='Search'
        value={filter}
        startDecorator={<Search />}
        onChange={e => onChange(e.target.value.trim())}
      />
    </FormControl>
  </Box>
)
