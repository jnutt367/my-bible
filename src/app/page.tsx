import { useState } from 'react';
import styles from './page.module.css';

const books = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
  'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
  '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra',
  'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs',
  'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations',
  'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos',
  'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk',
  'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew',
  'Mark', 'Luke', 'John', 'Acts', 'Romans',
  '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians',
  'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy',
  'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter',
  '2 Peter', '1 John', '2 John', '3 John', 'Jude',
  'Revelation'
];

const Page = () => {
  const [selectedBook, setSelectedBook] = useState('');

  const handleSelectBook = (book) => {
    setSelectedBook(book);
    // Optionally, you can scroll to the selected book's section
    const element = document.getElementById(book);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>The Word of God Risen</h1>
      <div className={styles.dropdown}>
        <select
          value={selectedBook}
          onChange={(e) => handleSelectBook(e.target.value)}
          className={styles.dropdownSelect}
        >
          <option value="" disabled>Select a Book</option>
          {books.map(book => (
            <option key={book} value={book}>{book}</option>
          ))}
        </select>
      </div>
      <section className={styles.section}>
        {books.map(book => (
          <div key={book} id={book} className={styles.book}>
            <h2 className={styles.bookTitle}>{book}</h2>
            {/* Add content for each book here */}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Page;
