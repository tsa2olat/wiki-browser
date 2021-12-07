import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IoLanguageSharp } from 'react-icons/io5';

import {
  Content,
  useClearDataOnLeave,
  useFetchOnPageLoad,
  useQueryParameter
} from "common";
import LanguagesDrawer from "./LanguagesDrawer";
import {
  clearArticleData,
  fetchArticle,
  selectAreLanguagesAvailable,
  selectArticle,
  selectArticleStatus,
} from "../articleSlice";
import { useToggleShowLanguages } from "./useToggleShowLanguages";
import { ArticleTitle, LanguageButton } from "./styled";

const Article = () => {
  const { title } = useParams();
  const language = useQueryParameter("language") || "en";

  const status = useSelector(selectArticleStatus);
  const article = useSelector(selectArticle);
  const areLanguagesAvailable = useSelector(selectAreLanguagesAvailable);

  useFetchOnPageLoad({
    fetchAction: fetchArticle,
    value: title,
    language,
  });

  const toggleShowLanguages = useToggleShowLanguages();

  useClearDataOnLeave({
    clearAction: clearArticleData,
  });

  return (
    <Content status={status}>

      <ArticleTitle>

        {areLanguagesAvailable &&
          <>
            <LanguagesDrawer />

            <LanguageButton
              onClick={toggleShowLanguages}
              title="Read article in other language"
            >
              <IoLanguageSharp />
            </LanguageButton>
          </>
        }

        {article?.title}
      </ArticleTitle>

      {!!article?.html &&
        <div
          dangerouslySetInnerHTML={{ __html: article?.html }}
        />
      }

    </Content>
  );
};

export default Article;