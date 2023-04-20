// create app in developer console and put api key here
const API_KEY = "${{apiKey}}"

// reusable function that will apply a specified template to a specified entity
export async function applyTemplate(templateId: string, entityId: string) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const requestBody = JSON.stringify({});
    
    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: requestBody
    };

    await fetch(`https://sbx-api.yextapis.com/v2/accounts/me/entities/${entityId}?api_key=${API_KEY}&v=20230413&templateId=${templateId}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}