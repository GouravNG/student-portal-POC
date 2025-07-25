import { Grid, Skeleton } from '@mui/material'

const SkeletonPlacement = () => {
  return (
    <Grid container spacing={2} sx={{ pt: 4, mr: 1 }}>
      {Array.from({ length: 6 }).map((_, jdx) => (
        <Grid key={jdx + 1} size={4}>
          <Skeleton variant='rounded' sx={{ height: 200 }} />
        </Grid>
      ))}
    </Grid>
  )
}

export default SkeletonPlacement
