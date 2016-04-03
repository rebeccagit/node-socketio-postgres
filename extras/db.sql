--
-- PostgreSQL database dump SOMETHING TO LOOK INTO IN THE FUTURE ... STILL WORKING ON THIS
--

-- Dumped from database version 9.5.0
-- Dumped by pg_dump version 9.5.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE movies (
    name CHAR(50),
    rating INT,
    review CHAR(500)
);


ALTER TABLE movies OWNER TO postgres;

--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY movies (name, rating, review) FROM stdin;
In the Heart of the Sea                 	5	Fun story about a vindictive whale and people who get marooned on an island and at sea.                                                                                                                                                                                                                                                                                                                                                                                                                             
Point Break                             	5	Movie about hippie surfers who love extreme sports and "robbing from the rich to give to the poor."                                                                                                                                                                                                                                                                                                                                                                                                                 
Star Wars 7                             	5	Rumor is that this movie is about Luke Skywalker's daugther. Great special effects and great light saber scenes.                                                                                                                                                                                                                                                                                                                                                                                                    
Everest                                 	5	Great, realistic scenes of mountain climbing Mt. Everest. Very reminiscent of the movie Vertical Limit.                                                                                                                                                                                                                                                                                                                                                                                                             
Vertical Limit                          	5	A guy puts together a rescue team to save his sister who is stranded on her way up K-2.  Lots of adventure and great mountain climbing scenes.                                                                                                                                                                                                                                                                                                                                                                      
Mockingjay                              	0	Sad to say, I fell asleep.  I didn't wan't to, but I was so sleepy and the movie couldn't keep me interested.                                                                                                                                                                                                                                                                                                                                                                                                       
Creed                                   	0	Another one where I tried my hardest to stay awake, but it was so boring.  I'm just not into these types of films.                                                                                                                                                                                                                                                                                                                                                                                                  
The Secret in Their Eyes                	4	Typical crime drama with a disturbing twist at the end. I'll never look at America's Sweetheart, Julia Roberts, the same ever again.                                                                                                                                                                                                                                                                                                                                                                                
Spectre                                 	3	Typical James Bond movie.  It is stylish with bits of adventure thrown in here and there.                                                                                                                                                                                                                                                                                                                                                                                                                           
The Martian                             	5	Fun to watch a guy stranded alone on Mars figuring out ways to survive.                                                                                                                                                                                                                                                                                                                                                                                                                                             
The Peanuts Movie                       	4	This was a visually beautiful film.  The story is for kids, but if you like art, you'll like looking at this.                                                                                                                                                                                                                                                                                                                                                                                                       
Bridge of Spies                         	3	Pseudo-intellectual film.  Very predictable and because of that, a bit boring and bland.  In any case, Tom Hanks is always the greatest!                                                                                                                                                                                                                                                                                                                                                                            
Steve Jobs                              	4	Interesting film, though I do feel that Fassbender was not a good casting choice as Jobs.  Just a drama that will probably be played out in some small town local theatre someday.                                                                                                                                                                                                                                                                                                                                  
Sicario                                 	4	A very jaded, realistic look at the lives of those who are fighting the war on drugs.                                                                                                                                                                                                                                                                                                                                                                                                                               
Crimson Peak                            	3	Beautiful sets and costumes, good special effects and a very twisted ending.                                                                                                                                                                                                                                                                                                                                                                                                                                        
The Last Witch Hunter                   	2	If I was a teenager I might like this more.  But I'm not and this movie is just another predictable movie.  I love Vin Diesel so it was worth seeing anyway.                                                                                                                                                                                                                                                                                                                                                        
No Escape                               	4	A movie about a family on the run due to political uprising.                                                                                                                                                                                                                                                                                                                                                                                                                                                        
The Gift                                	2	Boring...a guy stalks a family and works on destroying the family.                                                                                                                                                                                                                                                                                                                                                                                                                                                  
Mission Impossible                      	3	Fun movie, lots of adventure! Predictable, but still fun.  Tom Cruise almost always delivers awesome movies.                                                                                                                                                                                                                                                                                                                                                                                                        
\.


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

