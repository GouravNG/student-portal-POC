import { Suspense, useState } from 'react'
import { useGetAllPlacement } from '../api/hooks/usePlacement'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Collapse,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { ChevronDown } from 'lucide-react'
import type { PlacementType } from '../api'
import SkeletonPlacement from '../components/skeletons/placement.skeleton'

const OfferCard = ({ data }: { data: PlacementType }) => {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <Grid size={4}>
      <Card variant='outlined'>
        <CardHeader
          title={data.companyDetails.companyName}
          subheader={
            <Typography variant='caption'>
              Placement id:{data.placementId}
            </Typography>
          }
          sx={{ m: 0 }}
        />

        <CardContent sx={{ m: 0 }}>
          <Stack direction={'row'} spacing={1}>
            {data.branch.map((i) => (
              <Chip label={i} key={i} />
            ))}
          </Stack>
        </CardContent>

        <CardActions>
          <Stack direction={'row'} spacing={2} useFlexGap flexGrow={1}>
            <Button size='small' variant='outlined'>
              Read More
            </Button>
            <Button size='small' variant='contained'>
              Apply
            </Button>
          </Stack>
          <IconButton
            sx={{ marginLeft: 'auto' }}
            onClick={() => setToggle(!toggle)}
          >
            <ChevronDown />
          </IconButton>
        </CardActions>

        <Collapse in={toggle} sx={{ m: 1 }}>
          <Typography variant='body2' sx={{ textDecoration: 'underline' }}>
            Eligibility Critarias
          </Typography>
          <Box component={'ul'} sx={{ m: 2, p: 0 }}>
            {data.eligibilityCritarias.map((i, idx) => (
              <li key={idx + i}>{i}</li>
            ))}
          </Box>
        </Collapse>
      </Card>
    </Grid>
  )
}

const Opportunities = () => {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetAllPlacement()

  if (data)
    return (
      <>
        <Grid container spacing={2} sx={{ pt: 4, mr: 1 }}>
          {data.map((j, jdx) =>
            j.data.map((i, idx) => <OfferCard data={i} key={idx + jdx} />),
          )}
        </Grid>
        <Box sx={{ display: 'flex', m: 2 }}>
          {hasNextPage && (
            <Button
              variant='contained'
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              sx={{ margin: 'auto' }}
            >
              Load More
            </Button>
          )}
        </Box>
      </>
    )

  if (error) return <h1>{error.message}</h1>
}

export const PlacementPage = () => {
  return (
    <Suspense fallback={<SkeletonPlacement />}>
      <Opportunities />
    </Suspense>
  )
}
export default PlacementPage
