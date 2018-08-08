FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD requirements.txt /code/
RUN pip install -r requirements.txt

ADD . /code/
RUN python manage.py migrate

EXPOSE 8000
# # Serve the app
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]