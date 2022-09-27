-- tablas

create table Users (
    id uuid not null unique Primary key,
    name varchar not null,
    email varchar not null unique,
    password varchar not null,
    age int not null,
    courses uuid references Courses(id),
    roles uuid references Roles(id)
);

create table Courses(
    id uuid not null unique Primary key,
    title uuid references Course.Video(id),
    level uuid references Level(id),
    categories uuid references Categories(id),
    teacher uuid references Teacher(id)
);

create table Teacher(
    id uuid not null unique Primary key,
    name varchar not null unique
);

create table Level(
    id uuid not null unique Primary key,
    level varchar not null unique
);

create table Course.Video(
    id uuid not null unique Primary key,
    title varchar not null unique,
    url varchar not null unique
);

create table Categories(
    id uuid not null unique Primary key,
    name varchar not null unique
);

create table Roles(
    id uuid not null unique Primary key,
    name varchar default "student" 
);

-- creacion de identidades de cada tabla
-- Empezamos con las que no tienen reference

insert into Roles values (
    'bb742d5d-12e8-4f26-851a-71ce775cb64e',
    'student'
),(
    '03b0eb14-a3a7-4b1f-aaed-1257568d312a',
    'teacher'
);

insert into Categories values (
    '16f7e12d-93ec-42c2-a8ad-7bc1d12207a1',
    'science'
),(
    '1ec486aa-3fd1-474e-9a33-29b5d8655cc1',
    'History'
);

insert into Course.Video values (
    '067ffc9b-35bb-404d-9ff4-d1686a2ce3f7',
    'Krakatoa caboom',
    'https://www.youtube.com/watch?v=NLhjNzQHphQ'
),(
    'e3e4cca2-2a45-4354-9e00-f851f0f86e32',
    'Nanographos',
    'https://www.youtube.com/watch?v=PyoRdu-i0AQ'
);

insert into Level values (
    'ac8dfb19-6a3f-445f-bdf6-29320ecd8303',
    'izi'
),(
    '7e8418fc-74ce-459c-ba43-bee49670053d',
    'Med'
),(
    '6a3544f9-4176-4f4f-bcc8-7e26cd96c08f',
    'hrd'
);

insert into Teacher values (
    'ba857215-11b6-41f7-8d05-27f66be729c2',
    'Dr. Rivero'
),(
    'd715404e-3563-40b3-bf69-42b14648b0d8',
    'Dra. Z'
);

insert into Courses values (
    '14be0268-f130-4bce-b98a-439bf509bff0',
    '067ffc9b-35bb-404d-9ff4-d1686a2ce3f7',
    'ac8dfb19-6a3f-445f-bdf6-29320ecd8303',
    '1ec486aa-3fd1-474e-9a33-29b5d8655cc1',
    'ba857215-11b6-41f7-8d05-27f66be729c2'
),(
    '01ae13a7-6d50-4ffd-99a4-96e616a7282b',
    'e3e4cca2-2a45-4354-9e00-f851f0f86e32',
    '6a3544f9-4176-4f4f-bcc8-7e26cd96c08f',
    '16f7e12d-93ec-42c2-a8ad-7bc1d12207a1',
    'd715404e-3563-40b3-bf69-42b14648b0d8'
);

insert into Users values (
    '1aa49893-a9f4-4f67-b314-8d441d0a73f5',
    'Mario S.',
    'mario@gmail.com',
    'pasww0rd',
    22,
    '14be0268-f130-4bce-b98a-439bf509bff0',
    'student'
),(
    'add6e58b-043b-4874-bd5c-a97f6af29f95',
    'chon V.',
    'chon@gmail.com',
    'btswooo',
    22,
    '01ae13a7-6d50-4ffd-99a4-96e616a7282b',
    'student'
);
