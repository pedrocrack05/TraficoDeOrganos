--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: client; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.client (
    id integer NOT NULL,
    name character varying NOT NULL,
    contact character varying NOT NULL,
    "medicalHistory" character varying NOT NULL
);


ALTER TABLE public.client OWNER TO postgres;

--
-- Name: client_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.client_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.client_id_seq OWNER TO postgres;

--
-- Name: client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.client_id_seq OWNED BY public.client.id;


--
-- Name: organ; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.organ (
    id integer NOT NULL,
    type character varying NOT NULL,
    status character varying NOT NULL,
    price integer NOT NULL
);


ALTER TABLE public.organ OWNER TO postgres;

--
-- Name: organ_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.organ_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.organ_id_seq OWNER TO postgres;

--
-- Name: organ_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.organ_id_seq OWNED BY public.organ.id;


--
-- Name: provider; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provider (
    id integer NOT NULL,
    name character varying NOT NULL,
    contact character varying NOT NULL,
    "organType" character varying NOT NULL
);


ALTER TABLE public.provider OWNER TO postgres;

--
-- Name: provider_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.provider_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.provider_id_seq OWNER TO postgres;

--
-- Name: provider_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.provider_id_seq OWNED BY public.provider.id;


--
-- Name: quality_assurance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quality_assurance (
    id integer NOT NULL,
    "verificationType" character varying NOT NULL,
    "verificationDate" timestamp without time zone NOT NULL,
    results character varying NOT NULL
);


ALTER TABLE public.quality_assurance OWNER TO postgres;

--
-- Name: quality_assurance_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.quality_assurance_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.quality_assurance_id_seq OWNER TO postgres;

--
-- Name: quality_assurance_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.quality_assurance_id_seq OWNED BY public.quality_assurance.id;


--
-- Name: relocation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.relocation (
    id integer NOT NULL,
    risk character varying NOT NULL,
    details character varying NOT NULL
);


ALTER TABLE public.relocation OWNER TO postgres;

--
-- Name: relocation_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.relocation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.relocation_id_seq OWNER TO postgres;

--
-- Name: relocation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.relocation_id_seq OWNED BY public.relocation.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: client id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client ALTER COLUMN id SET DEFAULT nextval('public.client_id_seq'::regclass);


--
-- Name: organ id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.organ ALTER COLUMN id SET DEFAULT nextval('public.organ_id_seq'::regclass);


--
-- Name: provider id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provider ALTER COLUMN id SET DEFAULT nextval('public.provider_id_seq'::regclass);


--
-- Name: quality_assurance id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quality_assurance ALTER COLUMN id SET DEFAULT nextval('public.quality_assurance_id_seq'::regclass);


--
-- Name: relocation id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.relocation ALTER COLUMN id SET DEFAULT nextval('public.relocation_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: client; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.client (id, name, contact, "medicalHistory") FROM stdin;
1	Daniel	danielp1908	buena salud
2	Pedro	email	buena
\.


--
-- Data for Name: organ; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.organ (id, type, status, price) FROM stdin;
1	Riñón	Disponible	50000
3	Corazon	Disponible	100000
2	Pene	Disponible	20000
\.


--
-- Data for Name: provider; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provider (id, name, contact, "organType") FROM stdin;
1	Proveedor 1	contacto@proveedor.com	Riñón
2	Proveedor 2	contacto@proveedor.com	Corazon
3	hola	telefono	riñon
\.


--
-- Data for Name: quality_assurance; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quality_assurance (id, "verificationType", "verificationDate", results) FROM stdin;
1	Prueba de compatibilidad	2023-05-01 00:00:00	Aprobado
2	hola	2025-02-05 00:00:00	hola
\.


--
-- Data for Name: relocation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.relocation (id, risk, details) FROM stdin;
2	Riesgo moderado	Detalles de la relocalización
3	Grave	organos minimo bajo 20 grados
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, email, password, name) FROM stdin;
1	Daniel@gmail.com	$2a$10$o7ieAP/nfEk7a13K3eKIaukp4ZHr2n1yjAOagyq5fGToeHdTg6M6y	Daniel
2	usuario@ejemplo.com	$2a$10$aPm7a81kRdp87mrgo8kzse5RkXjyJDNrsFJThne9hlt/ewI8XrHLy	Mateo
4	pedrojoseorrego@gmail.com	$2b$10$nSVKfNrbqZqV4wDIkG1STe0pD6uJWd7.d/DlwnjPtc5S4E8w2hkhG	Pedro
5	ana@gmail.com	$2b$10$qqTQTbzYKR60agfCX6WdL.WMiZ3O4Z2P8fbVfCnZJngmOdLm3spT.	Ana
3	x@gmail.com	Maria123	Maria
6	jack@gmail.com	$2b$10$bCH857LEnzqCYahRRujCouutzU4wad2qe.KHN3wWywzgottrPrL6y	Jack
\.


--
-- Name: client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.client_id_seq', 2, true);


--
-- Name: organ_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.organ_id_seq', 3, true);


--
-- Name: provider_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provider_id_seq', 4, true);


--
-- Name: quality_assurance_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.quality_assurance_id_seq', 2, true);


--
-- Name: relocation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.relocation_id_seq', 3, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 6, true);


--
-- Name: quality_assurance PK_01e340c55ce8fbdbdcd1dc34dc5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quality_assurance
    ADD CONSTRAINT "PK_01e340c55ce8fbdbdcd1dc34dc5" PRIMARY KEY (id);


--
-- Name: provider PK_6ab2f66d8987bf1bfdd6136a2d5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provider
    ADD CONSTRAINT "PK_6ab2f66d8987bf1bfdd6136a2d5" PRIMARY KEY (id);


--
-- Name: relocation PK_78a257f11c5f3ede46605012f94; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.relocation
    ADD CONSTRAINT "PK_78a257f11c5f3ede46605012f94" PRIMARY KEY (id);


--
-- Name: client PK_96da49381769303a6515a8785c7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY (id);


--
-- Name: organ PK_aec6e62eb9cb93e5f41dc2a13f5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.organ
    ADD CONSTRAINT "PK_aec6e62eb9cb93e5f41dc2a13f5" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: user UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);


--
-- PostgreSQL database dump complete
--

