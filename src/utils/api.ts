//При реализации настоящих запросов удалить FakeResponse и все интефейсы прописать в отдельном файле для типов
interface FakeResponse<T = any> {
  ok: boolean;
  status: number;
  json: () => Promise<T>;
}

function getResponse<T>(res: FakeResponse<T>): Promise<T> {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}

export async function getData<T>(): Promise<T> {
  //Вместо получение данных через fetch
  //  \/ получаем псевдоданные \/
  const fakeData: Promise<FakeResponse<T>> = new Promise((resolve) => {
    const fakeResponse = JSON.stringify({
      fields: [
        { type: "text", label: "Имя", model: "name", required: true },

        { type: "email", label: "Email", model: "email", required: true },

        {
          type: "password",
          label: "Пароль",
          model: "password",
          required: true,
          minLength: 6,
        },

        {
          type: "select",
          label: "Роль",
          model: "role",
          options: ["Админ", "Пользователь"],
          required: true,
        },

        {
          type: "checkbox",
          label: "Согласен с условиями",
          model: "terms",
          required: true,
        },
      ],
    });

    const delay = Math.floor(Math.random() * 1000);

    setTimeout(
      () =>
        resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(fakeResponse as T),
        }),
      delay
    );
  });

  return await getResponse(await fakeData);
}
