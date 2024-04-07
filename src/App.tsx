import './App.scss'
import {ThemeProvider} from "styled-components";
import theme from "@theme/theme.ts";
import UserStoriesScreen from "@screens/UserStories.screen.tsx";
import {store} from "./redux/store.ts";
import {Provider} from "react-redux";
import { I18nextProvider } from 'react-i18next';
import translationInstance from '@i18n/translations.ts';

function App() {
  return <ThemeProvider theme={theme}>
    <Provider store={store}>
      <I18nextProvider i18n={translationInstance}>
        <UserStoriesScreen/>
      </I18nextProvider>
    </Provider>
  </ThemeProvider>
}

export default App;
