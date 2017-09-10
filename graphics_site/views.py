from django.shortcuts import render

def index(request):
    return render(request, 'graphics_site/index.html', {})

def zero(request):
    return render(request, 'graphics_site/assignment0.html', {})

def one(request):
    return render(request, 'graphics_site/assignment1.html', {})    

def two(request):
    return render(request, 'graphics_site/assignment2.html', {})

def three(request):
    return render(request, 'graphics_site/assignment3.html', {})

def four(request):
    return render(request, 'graphics_site/assignment4.html', {})

def five(request):
    return render(request, 'graphics_site/assignment5.html', {})

def six(request):
    return render(request, 'graphics_site/assignment6.html', {})

def seven(request):
    return render(request, 'graphics_site/assignment7.html', {})

def eight(request):
    return render(request, 'graphics_site/assignment8.html', {})

def nine(request):
    return render(request, 'graphics_site/assignment9.html', {})

def ten(request):
    return render(request, 'graphics_site/assignment10.html', {})

def eleven(request):
    return render(request, 'graphics_site/FinalProject.html', {})

