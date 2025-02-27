import { ArrowForwardIosOutlined as ArrowIcon} from '@mui/icons-material';
import { Card, Title } from './styles';

type PageCardProps = {
  title: string;
  id: string;
  status: string;
}

function PageCard(props: PageCardProps) {
  const { title, id } = props;

  return (
    <Card href={`/redeems/${id}`} $isDisabled={props.status === 'INACTIVE'}>
      <Title>{title}</Title>
      <ArrowIcon sx={{ width: 20, height: 20 }} />
    </Card>
  )
}

export default PageCard;