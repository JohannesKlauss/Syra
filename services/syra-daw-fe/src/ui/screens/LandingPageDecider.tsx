import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from '../../const/routes';

function LandingPageDecider() {
  const history = useHistory();

  useEffect(() => {
    history.push(process.env.NODE_ENV === 'development' ? routes.Editor : routes.NewProject);
  }, [history]);

  return null;
}

export default LandingPageDecider;
