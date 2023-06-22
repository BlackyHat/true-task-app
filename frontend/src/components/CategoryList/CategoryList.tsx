import CategoryItem from '../CategoryItem/CategoryItem';
import Grid from '@mui/material/Grid';
import { useQuery } from '@apollo/client';
import { GET_ALL_CATEGORIES } from '../../qraphql/queries/categories.queries';
import { LinearProgress } from '@mui/material';

const CategoryList = () => {
  const { data, loading } = useQuery(GET_ALL_CATEGORIES);

  return (
    <Grid container spacing={4}>
      {loading && (
        <LinearProgress
          sx={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
        />
      )}
      {data &&
        !loading &&
        data.allCategories.map((item) => (
          <CategoryItem key={item.id} category={item} />
        ))}
    </Grid>
  );
};

export default CategoryList;
