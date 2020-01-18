import {createSiteMenuTemplate} from './components/sitemenu.js';
import {createFilterTemplate} from './components/filter.js';
import {createBoardTemplate} from './components/board.js';
import {createTaskTemplate} from './components/task.js';
import {createTaskEditTemplate} from './components/taskedit.js';
import {createLoadMoreTemplate} from './components/load-more-button.js';

const TASK_COUNT = 3;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderTemplates = () => {

  render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
  render(siteMainElement, createFilterTemplate(), `beforeend`);
  render(siteMainElement, createBoardTemplate(), `beforeend`);

  const taskListElement = siteMainElement.querySelector(`.board__tasks`);
  render(taskListElement, createTaskEditTemplate(), `beforeend`);

  let TemplateData = createTaskTemplate();

  for (let i = 0; i < TASK_COUNT - 1; i++) {
   TemplateData +=createTaskTemplate();
  }
  render(taskListElement, TemplateData, `beforeend`);

  const boardElement = siteMainElement.querySelector(`.board`);
  render(boardElement, createLoadMoreTemplate(), `beforeend`);

};

renderTemplates();
