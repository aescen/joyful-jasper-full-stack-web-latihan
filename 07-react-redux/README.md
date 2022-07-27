# Redux Todo

referensi https://redux-toolkit.js.org/tutorials/quick-start

## 1.0
1. Buat project react seperti biasa
2. install redux toolkit
3. Buat file `todoSlice.js` sebagai reducer, di dalamnya: 
  - buat initialState dengan data berikut
    ```js
    const initialState = {
      todos: [
        {id: 1, todo: "belajar react"},
        {id: 2, todo: "belajar redux"},
      ]
    }
    ```
  - buat `todoSlice` menggunakan `createSlice()`, lalu beri properti `name` dan `initialState`
  - export default c.reducer
4. Buat file `store.js`, di dalamnya:
  - buat store menggunakan `configureStore()`, kasih properti `reducer` dan isi dengan todoSlice yang sudah di export
5. Di `index.js` bungkus komponen `<App>` dengan `<Provider>` yang sudah diberi sebuah store
6. Buat komponen `Todo.js`, lalu ambil data store menggunakan `useSelector()` kemudian tampilkan

## 2.0
1. Buat action addTodo untuk menambahkan data todo baru
2. Buat action deleteTodo untuk menghapus data todo berdasarkan id
3. Buat action editTodo untuk mengubah data todo berdasarkan id

