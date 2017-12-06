from xml.etree import ElementTree
import urllib.request as url


def parser(index, airport, hours_before):

    request = 'https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve' \
              '&format=xml&stationString=' + airport + '&hoursBeforeNow=' + hours_before

    root = ElementTree.parse(url.urlopen(request)).getroot()

    # elementTree converts xml into array  .text is the text in that element

    return root[6][0][index].text


# EXAMPLE OF USE:   print("wind speed=", parser(8, "EICK", 12))
