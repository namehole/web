# some_app/views.py
from django.views.generic import TemplateView

class TestView(TemplateView):
    template_name = "settings/main.html"