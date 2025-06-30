import fetchData from "./http";

export function getLevel(userId) {
  const response = fetchData(`https://server:8080/user/${userId}`);
  
  if (response.status === "ok") {
    return `Ваш текущий уровень: ${response.level}`; 
  }
  
  return `Информация об уровне временно недоступна`;
}