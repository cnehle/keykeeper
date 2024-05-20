from flask import Blueprint, request, Response

auth = Blueprint('auth', __name__, template_folder = 'templates')