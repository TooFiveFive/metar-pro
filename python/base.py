from getMetar import parser
from runwayDirections import runway_headings
from timeCalculator import time


def output(airport, flight_time):
    number_of_runways = len(runway_headings(airport))
    runway_directions = runway_headings(airport)

    hours_ahead = str(time(flight_time))

    wind_direction = parser(8, airport, hours_ahead)

    print(hours_ahead)


output("EICK", "Dec 5 2017  1:33PM")
