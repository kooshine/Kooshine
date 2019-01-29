#/usr/bin/python3
#author:KooShine

from django.http import HttpResponse
from django.shortcuts import render


def first(request):
    return render(request, "./views/first_page_v0_1.html")

def read(request):
    return render(request, "./views/reading_page_v0_1.html")

def about(request):
    if request.is_ajax():
        response = JsonResponse({"info":"About KooShine"})
        return response

