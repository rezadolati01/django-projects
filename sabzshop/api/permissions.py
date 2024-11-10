from rest_framework import permissions


class IsAdminTabriz(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.user.is_authenticated and \
            request.user.is_superuser and \
            request.user.phone.startswith('0914')

class IsBuyer(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.buyer == request.user